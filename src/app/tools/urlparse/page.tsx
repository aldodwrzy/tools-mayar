"use client"

import Script from "next/script";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import $ from "jquery"

export default function CompressPdf() {
    function parseURL() {
        // Get the input URL
        var url = document.getElementById("url").value;

        // Create a URL object using the input URL
        var parser = document.createElement('a');
        parser.href = url;

        // Get the different parts of the URL
        var protocol = parser.protocol;
        var hostname = parser.hostname;
        var port = parser.port;
        var pathname = parser.pathname;
        var search = parser.search;
        var hash = parser.hash;

        // Display the parsed information on the page
        var result = document.getElementById("result");
        result.innerHTML = "Protocol: " + protocol + "<br>" + "Hostname: " + hostname + "<br>" + "Port: " + port + "<br>" + "Pathname: " + pathname + "<br>" + "Search: " + search + "<br>" + "Hash: " + hash;
      }
    return (
        <>
            <div className="col-sm-9">
                <div className="header-select-main" id="upload-image">
                    <Stack 
                        direction={"row"} 
                        ml={5} 
                        mt={3} 
                        component={Link} 
                        href={'/'} 
                        p={1}
                        width={'200px'}
                        sx={{'&:hover': {
                                backgroundColor: '#dceafe', 
                                borderRadius:'5px'
                            }
                        }}>
                        <ArrowBackIcon sx={{color:"#000"}}/>
                        <Typography color={"black"} display={"flex"} justifyContent={"start"} alignItems={"center"}>&nbsp; Kembali ke Tools</Typography>
                    </Stack>
                    <div className="section-m">
                        <h1 className="section-title">URL Parser</h1>
                        <h2 className="section-description">Cek informasi URL anda menggunakan URL Parser disini</h2>
                    </div>
                </div>
                <div className="card-body">
                <div>
      <label htmlFor="url">Enter URL:</label>
      <input type="text" id="url" size={50}/><br/>
      <button onClick={parseURL}>Parse</button>
    </div>
    <div id="result"></div><br/><br/><br/>
    
                </div>
            </div>
        </>
    );
}