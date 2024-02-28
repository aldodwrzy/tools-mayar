import Link from "next/link"
import Image from "next/image"

export default function Home() {
    return (
        <>
            <div className="container">
                <div id="toolarea">
                    <div id="pdf">
                        <div className="section-m">
                            <h1 className="section-title">Mayar Tools</h1>
                            <h2 className="section-description">Alat bisnis sederhana dan mudah digunakan untuk membantumu mengolah dan mengedit dokumen online</h2>
                            <h2 className="section-description">Semua alat dijalankan pada browser kamu untuk privasi. Tanpa perlu daftar!</h2>
                        </div>
                        <div className="icon-box-container">
                        <Link href={'tools/ipaddressfinder'}>
                            <div className="icon-box">
                                <div className="icon">
                                    <Image
                                        src={'/images/pdf.png'}
                                        alt="HTML to PDF"
                                        width={'100'}
                                        height={'100'}
                                    />
                                </div>
                                <h3>IP Address Finder</h3>
                                <p>Check Your IP Address</p>
                            </div>
                            </Link>
                            <Link href={'tools/domainlocation'}>
                                <div className="icon-box">
                                    <div className="icon">
                                        <Image
                                            src={'/images/compress-pdf.png'}
                                            alt="Compress Pdf"
                                            width={'100'}
                                            height={'100'}
                                        />
                                    </div>
                                    <h3>Domain Location</h3>
                                    <p>Check Your Domain Location</p>
                                </div>
                            </Link>
                            <Link href={'tools/nslookup'}>
                            <div className="icon-box">
                                <div className="icon">
                                    <Image
                                        src={'/images/jpeg-to-pdf.png'}
                                        alt="JPEG to PDF"
                                        width={'100'}
                                        height={'100'}
                                    />
                                </div>
                                <h3>Nameserver Lookup</h3>
                                <p>Check Your DNS Name Server</p>
                            </div>
                            </Link>
                            <Link href={'tools/walinkgenerate'}>
                            <div className="icon-box">
                                <div className="icon">
                                    <Image
                                        src={'/images/youtube.png'}
                                        alt="Unduh Video Youtube"
                                        width={'100'}
                                        height={'100'}
                                    />
                                </div>
                                <h3>Whatsapp Link Generator</h3>
                                <p>Create a Whatsapp Link Directly To Your Chat Page    </p>
                            </div>
                            </Link>                   
                        </div>
                        <div id="1-container"></div>
                    </div>
                </div>
            </div>
        </>
    );
}