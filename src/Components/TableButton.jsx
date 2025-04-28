import React, { useRef } from 'react';
import { IconButton, Tooltip, HStack, Whisper, toaster, Message, Popover, Button } from 'rsuite';
import BatchPlusIcon from '@rsuite/icons/BatchPlus';
import PhoneFillIcon from '@rsuite/icons/PhoneFill';
import TrashIcon from '@rsuite/icons/Trash';
import instance from '../middleware';

const ButtonCellRenderer = ({ value, SiteClick, PhoneClick, fetchData }) => {
    const whisperRef = useRef();


    const DeleteClick = async (value) => {
        try {
            const response = await instance.get(`/deleteCustomer/${value._id}`);
            if (response.status === 200) {
                console.log(response.status);
                toaster.push(
                    <Message showIcon type="success" closable>
                        Deletion Successful
                    </Message>,
                    { placement: "topCenter", duration: 8000 }
                );
                fetchData();
            }
        } catch (error) {
            toaster.push(
                <Message showIcon type="error" closable>
                    Error Deleting Data
                </Message>,
                { placement: "topCenter", duration: 8000 }
            );
        }
    }

    return (
        <HStack>
            <Whisper placement="top" trigger="hover" speaker={<Tooltip>Add Site</Tooltip>}>
                <IconButton
                    icon={<BatchPlusIcon />}
                    onClick={() => SiteClick(value)}
                    size="xs"
                    appearance="primary"
                >
                </IconButton>
            </Whisper>

            <Whisper placement="top" trigger="hover" speaker={<Tooltip>Change Phone</Tooltip>}>
                <IconButton
                    icon={<PhoneFillIcon />}
                    onClick={() => PhoneClick(value)}
                    size="xs"
                    appearance="primary"
                >
                </IconButton>
            </Whisper>

            <Whisper
                ref={whisperRef}
                trigger="click"
                placement="auto"
                preventOverflow
                speaker={
                    <Popover title="Confirm Deletion" style={{ borderRadius: '10px' }}>
                        <div style={{ padding: '0.5rem' }}>
                            <p>Are you sure you want to delete this user?</p>
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', marginTop: '1rem' }}>
                                <Button onClick={() => whisperRef.current?.close()}>Cancel</Button>
                                <Button color="red" appearance="primary" onClick={() => DeleteClick(value)}>
                                    Delete
                                </Button>
                            </div>
                        </div>
                    </Popover>
                }
            >
                <IconButton
                    icon={<TrashIcon />}
                    size="xs"
                    color="red"
                    appearance="primary"
                />
            </Whisper>

        </HStack >
    );
};

export default ButtonCellRenderer;