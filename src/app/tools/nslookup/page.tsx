"use client"

import Script from "next/script";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Stack, Typography } from "@mui/material";
import Link from "next/link";
import $ from "jquery"
import { useEffect } from "react";

export default function nslookup() {
    useEffect(() => {
        $('form').submit(function(event) {
            event.preventDefault();
            var domain = $('#domain').val();
            $.get('https://dns.google/resolve', {name: domain, type: 'NS'}, function(data) {
              var result = '<h2>Nameservers for ' + domain + ':</h2>';
              var ns_records = data.Answer.filter(function(record:any) { return record.type === 2; });
              if (ns_records.length === 0) {
                result += '<p>No NS records found for ' + domain + '.</p>';
              } else {
                result += '<ul>';
                ns_records.forEach(function(record:any) {
                  result += '<li>' + record.data + '</li>';
                });
                result += '</ul>';
              }
              $('#result').html(result);
            });
          });
    }, []); // Pastikan untuk memberikan array kosong sebagai dependencies agar useEffect hanya dijalankan sekali setelah komponen dimuat
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
                        <h1 className="section-title">Convert Image To PDF</h1>
                        <h2 className="section-description">Konversi Gambar Menjadi File PDF</h2>
                    </div>
                </div>
                <div className="content-main-image">
                    <form>
                        <label htmlFor="domain">Domain:</label>
                        <input type="text" id="domain" name="domain"/><br></br>
                        <input type="submit" value="Lookup"/><br></br>
                    </form><br></br>
                    <div id="result"></div><br></br>
                </div>
            </div>
        </>
    );
}