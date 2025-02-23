import React, { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    Box,
    Stack,
    Avatar,
    Typography,
    Grid,
    TextField,
    Button,
    ToggleButton,
    ToggleButtonGroup,
    MenuItem,
} from "@mui/material";

const CutomDialog = ({ open, handleClose,title,children }) => {
    const [durationType, setDurationType] = useState("days");

    return (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
            <DialogTitle className="font-semibold">{title}</DialogTitle>
            <DialogContent className="p-4">
               {children}
            </DialogContent>
        </Dialog>
    );
};
export default CutomDialog