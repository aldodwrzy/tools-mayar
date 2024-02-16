"use client"

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Stack, Typography } from "@mui/material";
import Link from "next/link";

export default function CompressPdf() {
    function convertToPDF() {
        const input = document.getElementById('file');
        const file = input.files[0];
        const content = document.getElementById('content').value;
        
        if (file) {
            const reader = new FileReader();
            reader.readAsText(file);
        
            reader.onload = function() {
            const documentDefinition = {
                content: reader.result
            };
            
            pdfMake.createPdf(documentDefinition).download(file.name.replace(/\.[^/.]+$/, "") + ".pdf");
            };
        } else if (content) {
            const documentDefinition = {
                content: content
            };
            
            pdfMake.createPdf(documentDefinition).download("converted.pdf");
        }
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
                        <h1 className="section-title">Kompres PDF</h1>
                        <h2 className="section-description">Kurangi ukuran PDF dengan mengompresi teks dan gambar yang disematkan</h2>
                    </div>
                </div>
                <div className="content-main-image">
                    <h1>HTML To PDF</h1>
                    <section>
                        <form>
                            <label htmlFor="file">Select a file to convert:</label>
                            <br/>
                            <input type="file" id="file" name="file"/>
                            <br/>
                            <label htmlFor="content">Or enter your content:</label>
                            <br/>
                            <textarea id="content" name="content" rows={10} cols={50} ></textarea>
                            <br/>
                            <button type="button" onClick={() => convertToPDF()}>Convert to PDF</button>
                        </form>
                    </section>
                </div>
            </div>
        </>
    );
}