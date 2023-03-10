import React from "react";
import { CircularProgress } from "@mui/material";

const Loader = ({ loading }: { loading: boolean | any }): JSX.Element => {
    return loading && <CircularProgress color="secondary" size={100} style={{ marginLeft: "630px", marginTop: "150px", marginBottom: '500px' }} />
};

export default Loader;