"use client"

import Script from "next/script";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function CompressPdf() {
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
                    <h1>Image To PDF</h1>
                    <input type="file" id="file-input" accept="image/*"/>
                    <br/><br/>
                    <img id="preview-image" style={{display: "none"}}/>
                    <br/><br/>
                    <button id="download-pdf-button" className="button-image">Download PDF</button>
                    <br/><br/>
                </div>
                <Script>
                    {`
                        document.getElementById("file-input").addEventListener("change", function() {
                        var fileInput = document.getElementById("file-input");
                        if (fileInput.files.length > 0) {
                            var file = fileInput.files[0];
                            var reader = new FileReader();
                            reader.onload = function(event) {
                            document.getElementById("preview-image").src = event.target.result;
                            document.getElementById("preview-image").style.display = "block";
                            };
                            reader.readAsDataURL(file);
                        }
                        });
                        document.getElementById("download-pdf-button").addEventListener("click", function() {
                        var fileInput = document.getElementById("file-input");
                        if (fileInput.files.length > 0) {
                            var file = fileInput.files[0];
                            var reader = new FileReader();
                            reader.onload = function(event) {
                            var data = event.target.result;
                            var doc = new jsPDF();
                            doc.addImage(data, "JPEG", 10, 10, 180, 180);
                            doc.save(file.name.split(".")[0] + ".pdf");
                            };
                            reader.readAsDataURL(file);
                        }
                        });
                    `}
                </Script>
            </div>
        </>
    );
}