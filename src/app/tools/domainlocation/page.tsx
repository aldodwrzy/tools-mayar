"use client"

import Script from "next/script";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function domainlocation() {
    function getLocation() {
        const input = document.getElementById("input").value;
        const url = `https://find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com/iplocation?apikey=873dbe322aea47f89dcf729dcc8f60e8&ip=${input}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '853f298c92msh936ef33830f66c0p1f9e5cjsn6bb4e4cf2626',
                'X-RapidAPI-Host': 'find-any-ip-address-or-domain-location-world-wide.p.rapidapi.com'
            }
        };
        
        fetch(url, options)
        .then(response => response.json())
        .then(data => {
            const result = document.getElementById("result");
            result.innerHTML = `
            <p><strong>IP Address:</strong> ${data.ip}</p>
            <p><strong>Continent:</strong> ${data.continent}</p>
            <p><strong>Country:</strong> ${data.country}</p>
            <p><strong>City:</strong> ${data.city}</p>
            <p><strong>Latitude:</strong> ${data.latitude}</p>
            <p><strong>Longitude:</strong> ${data.longitude}</p>
            <p><strong>Timezone:</strong> ${data.timezone}</p>
            <p><strong>Organization:</strong> ${data.org}</p>
            <p><strong>Currency:</strong> ${data.currencyName} (${data.currencyCode})</p>
            `;
        })
        .catch(error => console.error(error));
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
                        <h1 className="section-title">Domain Location</h1>
                        <h2 className="section-description">Temukan lokasi dari Domain atau IP Address anda</h2>
                    </div>
                </div>
                <div className="content-main-image">
                    <label for="input">Enter IP address or domain:</label>
	                <input type="text" id="input" placeholder="e.g. 8.8.8.8 or google.com"/><br/>
	                <button id="submit" onClick={getLocation}>Submit</button><br/>
	            <p id="result"></p>
                </div>
            </div>
        </>
        );
    }