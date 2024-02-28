"use client"

import Script from "next/script";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Box, Stack, Typography } from "@mui/material";
import Link from "next/link";
import $ from "jquery"

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
                        <h1 className="section-title">Kompres PDF</h1>
                        <h2 className="section-description">Kurangi ukuran PDF dengan mengompresi teks dan gambar yang disematkan</h2>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                    <div className="col-md-12">
                        <div className="form-group">
                        <label className="text-weight"><b>Online Videos Link:</b></label>
                        <input className="form-control link" name="link" required type="txt" />
                        </div>
                    </div>
                    </div>
                    <form className="form-download">
                    <div className="row">
                        <div className="col-md-12">
                        <div className="form-group">
                            <label className="text-weight"><b>Select Video Fromate:</b></label>
                            <select className="form-control formte" required>
                            <option disabled selected style={{textAlign:'center'}} >Select Video Formate</option>
                            <option value="mp3">Mp3</option>
                            <option value="mp4a">144 Mp4</option>
                            <option value="360">360 Mp4</option>
                            <option value="480">480 Mp4</option>
                            <option value="720">720 Mp4</option>
                            <option value="1080">1080 Mp4</option>
                            <option value="4k">4k Mp4</option>
                            <option value="8k">8k Mp4</option>
                            </select>
                        </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                        <div className="form-group mt-4 download-video">
                            <button className="btn btn-success btn-block click-btn-down" type="submit">Download</button>
                        </div>
                        </div>
                    </div>
                    </form>
                    <Box>
                        <Typography color={"#AEAECB"} fontSize={'12px'} sx={{opacity:"0.8"}} my={5}>
                            Hanya gunakan alat ini untuk mendownload video milik anda atau anda memiliki hak atas video tersebut. 
                            Dengan menggunakan alat ini berarti anda telah menyetujui <Link href={'https://mayarid.notion.site/mayarid/Kebijakan-Layanan-Mayar-Tools-54f3bb3b974a4057863bba011efe345b'} style={{color:'blue', textDecoration:'underline'}}>syarat dan ketentuan</Link> kami.
                        </Typography>
                        <Typography color={"#AEAECB"} fontSize={'16px'} sx={{opacity:"0.8"}} mb={5}>
                            Mayar Youtube Downloader menjadi solusi yang cocok bagi Anda yang ingin mengunduh video favorit dari Youtube dengan berbagai resolusi, mulai dari kualitas standar (SQ) hingga definisi tinggi (HD), Full HD, 2K, dan bahkan format MP4 4K. Selain itu, Mayar Youtube Downloader memberikan kemudahan dalam mengonversi video YouTube menjadi file MP3, mempermudah dan mempercepat pengunduhan audio.
                        </Typography>
                        <Typography color={"#AEAECB"} fontSize={'16px'} sx={{opacity:"0.8"}} mb={5}>
                            Kini, tidak ada lagi yang menghalangi Anda untuk menonton video favorit secara offline tanpa perlu koneksi internet. Alat ini telah dirancang untuk memenuhi semua kebutuhan pengunduhan Anda, beroperasi dengan mulus baik di PC maupun perangkat seluler.
                        </Typography>
                        <Typography color={"#AEAECB"} fontSize={'16px'} sx={{opacity:"0.8"}} mb={5}>
                            Ingin menikmati video favorit Anda tanpa tergantung koneksi internet? Temukan kemudahan untuk unduh video YouTube dengan YT Downloader kami yang cepat dan user-friendly. Dengan hanya beberapa klik, Anda bisa download video YouTube dan mengonversinya menjadi format YouTube MP4, memungkinkan Anda menyimpan dan menonton konten kesayangan Anda kapan saja, di mana saja.
                        </Typography>
                    </Box>
                </div>
                <Script>
                    {`
                        $(".click-btn-down").click(function(){
                            var link = $(".link").val();
                            var fromate = $(".formte").children("option:selected").val();
                            var src =""+link+"="+fromate+"";
                            downloadVideo(link,fromate);
                        });
                        function downloadVideo(link,fromate) {
                            $('.download-video').html('<iframe style="width:100%;height:60px;border:0;overflow:hidden;" scrolling="no" src="https://loader.to/api/button/?url='+link+'&f='+fromate+'"></iframe>');
                        }
                    `}
                </Script>
            </div>
        </>
    );
}