import { Button, Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
return (
<header>
  <Grid container  display={"flex"} alignItems={"center"}>
    <Grid item lg={4}>
      <Link href="/">
        <Image
          width={0}
          height={0}
          src={'https://mayar.id/tools/mayar_logo.webp'}
          alt="Mayar"
          unoptimized
          style={{
            width:'auto',
            height:'58px'
          }}
        />
      </Link>
    </Grid>
    <Grid item lg={7}>
      <nav id="menu">
        <Link href="https://mayar.id/industry " target="_blank">Industri</Link>
        <Link href="https://mayar.id/pricing" target="_blank">Harga</Link>
        <Link href="https://mayar.id/demo" target="_blank">Demo</Link>
      </nav>
    </Grid>
    <Grid item lg={1}>
      <Button 
        variant="contained" 
        href="https://web.mayar.id/sign-in/coupon/INBOUNDWEB" 
        sx={{
          borderRadius:'50px', 
          padding:'16px 32px', 
          fontSize:'16px',
          fontWeight:'700', 
          border:1,
          borderColor:'#e5eeff',
          backgroundColor:'#e5eeff', 
          boxShadow:'none', 
          color:'#0C54EC',
          textTransform: 'capitalize',
          '&:hover':{
            backgroundColor: '#ffffff', 
            border:1,
            borderColor:'#0C54EC',
            boxShadow:'none', 
          }
        }}>
        Login
      </Button>
    </Grid>
  </Grid>
</header>
);
}