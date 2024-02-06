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
                    <Link href={'tools/compresspdf'}>
                        <div className="icon-box">
                            <div className="icon">
                                <Image
                                    src={'/images/pict2.png'}
                                    alt="Compress Pdf"
                                    width={'100'}
                                    height={'100'}
                                />
                            </div>
                            <h3>Compress PDF</h3>
                            <p>Menggabungkan banyak PDF menjadi satu file PDF.</p>
                        </div>
                    </Link>

                    <Link href={''}>
                    <div className="icon-box">
                        <div className="icon">
                            <Image
                                src={'/images/pict1.png'}
                                alt="Ubah Format Gambar"
                                width={'100'}
                                height={'100'}
                            />
                        </div>
                        <h3>Ubah Format</h3>
                        <p>Ubah format dari satu atau banyak gambar menjadi PNG, JPEG, atau WEBP</p>
                        {/* <a href="tools/add-page-numbers-to-pdf.html" className="open-button">Open Me <span>&rarr;</span></a> */}
                    </div>
                    </Link>

                    <Link href={''}>
                    <div className="icon-box">
                        <div className="icon">
                            <Image
                                src={'/images/pict4.png'}
                                alt="Unduh Video Youtube"
                                width={'100'}
                                height={'100'}
                            />
                        </div>
                        <h3>Youtube Downloader</h3>
                        <p>Unduh video Youtube mudah, cepat dengan kualitas terbaik.</p>
                        {/* <a href="tools/crop-pdf" className="open-button">Open Me <span>&rarr;</span></a> */}
                    </div>
                    </Link>

                    <Link href={''}>
                    <div className="icon-box">
                        <div className="icon">
                            <Image
                                src={'/images/pict4.png'}
                                alt="Unduh Video Youtube"
                                width={'100'}
                                height={'100'}
                            />
                        </div>
                        <h3>Tiktok Downloader</h3>
                        <p>Unduh video Youtube mudah, cepat dengan kualitas terbaik.</p>
                        {/* <a href="tools/csv-to-pdf" className="open-button">Open Me <span>&rarr;</span></a> */}
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