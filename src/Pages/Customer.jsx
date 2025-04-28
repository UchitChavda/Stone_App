
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import React, { useState, useEffect } from 'react'
import {
    Input,
    InputGroup,
    Button,
    Col,
    Row,
    toaster,
    Message,
    Text,
    Panel,
    Modal
} from 'rsuite';
import PlusIcon from '@rsuite/icons/Plus';
import SearchIcon from '@rsuite/icons/Search';
import { AgGridReact } from "ag-grid-react";
import instance from '../middleware';
import ButtonCellRenderer from "../Components/TableButton"

function ViewCustomer({ workplace }) {
    const [rowData, setRowData] = useState([]);
    const [id, setID] = useState("");
    const [open, setOpen] = useState(false);
    const [number, setNumber] = useState("");
    const [siteopen, setSiteOpen] = useState(false);
    const [site, setSite] = useState([]);

    const columnDefs = [
        {
            headerName: "Sr. No.",
            field: "serial",
            width: 100,
            lockPosition: "left",
        },
        {
            headerName: "Customer Name",
            field: "name",
            lockPosition: "left",
            width: 200,
        },
        {
            headerName: "Phone",
            field: "phone",
            width: 130,
            lockPosition: "left",
        },
        {
            headerName: "Sites",
            field: "site",
            width: 600,
            lockPosition: "left",
            valueFormatter: ({ value }) => value?.join(', ') ?? ''
        },
        {
            headerName: "Actions",
            width: 120,
            lockPosition: "left",
            cellStyle: {
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            },
            cellRenderer: (params) => {
                return (
                    <ButtonCellRenderer
                        value={params.data}
                        PhoneClick={handlePhone}
                        SiteClick={handleSite}
                        fetchData={fetchData}
                    />
                );
            },
        },
    ];

    const onClose = () => {
        setOpen(false);
        setID("");
        setNumber("");
    }

    const onSiteClose = () => {
        setSiteOpen(false);
        setID("");
        setSite([]);
    }

    const handlePhone = (value) => {
        setID(value._id);
        setOpen(true);
    }

    const handlePhoneChange = async () => {
        try {
            const data = new FormData();
            data.append("id", id);
            data.append("phone", number);
            const response = await instance.post(`/updateCustomer`, data);
            if (response.status === 200) {
                toaster.push(
                    <Message showIcon type="success" closable>
                        Phone Number Changed.
                    </Message>,
                    { placement: "topCenter", duration: 3000 }
                );
                onClose();
                fetchData();
            }
        } catch (error) {
            toaster.push(
                <Message showIcon type="error" closable>
                    {error.response.data.detail}
                </Message>,
                { placement: "topCenter", duration: 3000 }
            );
        }
    }

    const handleSite = (value) => {
        setID(value._id);
        setSiteOpen(true);
        addInputField();
    }

    const addInputField = () => {
        setSite([...site, ""]);
    };

    const handleInputChange = (index, value) => {
        const updatedSite = [...site];
        updatedSite[index] = value;
        setSite(updatedSite);
    };

    const handleSiteAdd = async () => {
        try {
            const filteredSite = site.filter(value => value.trim() !== "");
            const data = new FormData();
            data.append("id", id);
            data.append("site", JSON.stringify(filteredSite));
            const response = await instance.post(`/updateCustomer`, data);
            console.log(response);
            if (response.status === 200) {
                toaster.push(
                    <Message showIcon type="success" closable>
                        Site Added.
                    </Message>,
                    { placement: "topCenter", duration: 3000 }
                );
                onSiteClose();
                fetchData();
            }
        } catch (error) {
            toaster.push(
                <Message showIcon type="error" closable>
                    {error.response.data.detail}
                </Message>,
                { placement: "topCenter", duration: 3000 }
            );
        }
    }

    const fetchData = async () => {
        try {
            const response = await instance.get(`/getCustomers/${workplace}`);
            if (response.data && response.data.customer) {
                const tableData = response.data.customer.map((block, index) => {
                    return {
                        _id: block._id,
                        serial: index + 1,
                        name: block.name,
                        phone: block.phone,
                        site: block.site,
                    }
                }
                );
                setRowData(tableData);
            }
        } catch (error) {
            toaster.push(
                <Message showIcon type="error" closable>
                    Error Fetching Data
                </Message>,
                { placement: "topCenter", duration: 3000 }
            );
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <Panel
                bordered
                shaded
                style={{
                    height: "auto",
                    marginBottom: "2vh",
                    minHeight: "100vh",
                    marginTop: "2vh",
                    overflow: 'hidden',
                }}>
                <Row>
                    <Col sm={24} xs={24} lg={12} md={12}>
                        <Text style={{
                            fontSize: "150%",
                            fontWeight: '600',
                        }}>Customer Management</Text>
                    </Col>
                    <Col lg={12} md={12} sm={24} xs={24}>
                        <Col lg={16} md={16} sm={12} xs={24}>
                            <InputGroup inside>
                                <Input
                                    placeholder="Search Customer"
                                // value={searchQuery}
                                // onChange={setSearchQuery}
                                />
                                <InputGroup.Addon>
                                    <SearchIcon />
                                </InputGroup.Addon>
                            </InputGroup>
                        </Col>
                        <Col lg={8} md={8} sm={12} xs={24}>
                            <Button
                                startIcon={<PlusIcon />}
                                // onClick={handleOpen}
                                appearance='primary'
                                color='blue'
                                block
                            >
                                Add New Customer
                            </Button>
                        </Col>
                    </Col>
                </Row>

                <Row
                    className="ag-theme-alpine"
                    style={{
                        width: "100%",
                        height: "calc(130vh - 150px)",
                        marginTop: "2vh",
                    }}
                >
                    <AgGridReact
                        columnDefs={columnDefs}
                        rowData={rowData}
                        defaultColDef={{ sortable: false, resizable: true }}
                        pagination={true}
                        paginationPageSize={20}
                    />
                </Row>
            </Panel>

            <Modal
                open={open}
                onClose={onClose}
                backdrop="static"
            >
                <Modal.Header>
                    <Modal.Title>Change Number</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Input
                        name="number"
                        type="number"
                        value={number}
                        onChange={(value) => setNumber(value)}
                        placeholder="Enter Number"
                    >
                    </Input>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handlePhoneChange} appearance="primary">
                        Change
                    </Button>
                    <Button onClick={onClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal
                open={siteopen}
                onClose={onSiteClose}
                backdrop="static"
            >
                <Modal.Header>
                    <Modal.Title>Add Site</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {site.map((value, index) => (
                        <>
                            <Text>Site {index+1}:</Text>
                            <Input
                                key={index}
                                value={value}
                                onChange={(value) => handleInputChange(index, value)}
                                style={{ marginBottom: "2%" }}
                            />
                        </>
                    ))}
                    <Button onClick={addInputField} appearance="primary" color="green">
                        Add
                    </Button>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleSiteAdd} appearance="primary">
                        Submit Sites
                    </Button>
                    <Button onClick={onSiteClose}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>

        </>
    )
}

export default ViewCustomer;