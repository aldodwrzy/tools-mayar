"use client"

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function ipAddress() {
        function getIPAddress() {
            fetch("https://api.ipify.org/?format=json")
                .then(response => response.json())
                .then(data => {
                    document.getElementById("ipAddress").innerText = data.ip;
                })
                .catch(error => {
                    console.log("Error: " + error.message);
                });
        }
        getIPAddress()
        
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
                        <h1 className="section-title">IP Address Finder</h1>
                        <h2 className="section-description">Temukan alamat IP dari device anda secara cepat</h2>
                    </div>
                </div>
                <div className="content-main-image">
                    <h1>Check Your IP Address</h1>
                    <section>
                           <p>Your IP Address: <span id="ipAddress"></span></p>
                    </section>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </>
    );
}