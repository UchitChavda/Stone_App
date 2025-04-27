import React, { useState, useEffect } from 'react'
import {
    Form,
    Input,
    InputGroup,
    Button,
    Col,
    Row,
    toaster,
    Message,
    Text,
    Panel,
    PanelGroup,
    Modal
} from 'rsuite';
import PlusIcon from '@rsuite/icons/Plus';
import SearchIcon from '@rsuite/icons/Search';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import instance from '../middleware';

function ViewCustomer({ workplace }) {
    const [rowData, setRowData] = useState([]);
    const [show, setShow] = useState(false);

    const columnDefs = [
        {
            headerName: "Police Zone",
            field: "station",
            width: 160,
            lockPosition: "left",
            cellStyle: { fontWeight: '500' }
        },
        {
            headerName: "Latitude",
            lockPosition: "left",
            width: 130,
            field: "latitude",
        },
        {
            headerName: "Longitude",
            lockPosition: "left",
            width: 130,
            field: "longitude",
        },
        {
            headerName: "Crime Category",
            field: "crime",
            width: 170,
            lockPosition: "left",
            cellStyle: { fontWeight: '500' }
        },
        {
            headerName: "Possible Dates",
            field: "day",
            width: 150,
            lockPosition: "left"
        },
        {
            headerName: "Possible Crime Rate",
            field: "crimerate",
            width: 175,
            lockPosition: "left",
        },
    ];


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleAdd = () => {
        setShow(false);
        alert("Vehicle Added Successfully")
    }

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await instance.get(`/getCustomers/${workplace}`);
                if (response.data && response.data.customer) {
                    const tableData = response.data.customer.map((block, index) => {
                        return {
                            _id: block._id,
                            // serial: index + 1,
                            // accused: block.accused,
                            // address: block.address,
                            // crimeCategory: block.crime_category,
                            // startdate: block.crime_start_date,
                            // enddate: block.crime_end_date,
                            // crimeNumber: `${block['crime_number']}/${block['Year']}`,
                            // cc_number: block['Crime Case Number'] || "N/A",
                            // chargesheetdate: block['Date of submission'] || "N/A",
                            // duration: block.duration,
                            // starttime: block.crime_start_time,
                            // endtime: block.crime_end_time,
                            // latitude: block.latitude,
                            // longitude: block.longitude,
                            // mobile: block.mobile_number,
                            // officerusername: block.investigating_officer,
                            // regdate: block.FIR_registration_date,
                            // section: block.section,
                            // station: block.Police_station,
                            // status: block.Status,
                            // officernames: block.officers_name,
                            // deadline: block.Deadline,
                            // username: block.username,
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
                    { placement: "topCenter", duration: 8000 }
                );
            }
        }
        fetchData();
    }, []);

    return (
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
                    height: "calc(150vh - 150px)",
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
    )
}

export default ViewCustomer;