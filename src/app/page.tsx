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
                                            src={'/images/compress-pdf.png'}
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
                                        src={'/images/jpeg-to-pdf.png'}
                                        alt="Ubah Format Gambar"
                                        width={'100'}
                                        height={'100'}
                                    />
                                </div>
                                <h3>Image to PDF</h3>
                                <p>Convert any image format to pdf</p>
                            </div>
                            </Link>
                            <Link href={''}>
                            <div className="icon-box">
                                <div className="icon">
                                    <Image
                                        src={'/images/pdf.png'}
                                        alt="Unduh Video Youtube"
                                        width={'100'}
                                        height={'100'}
                                    />
                                </div>
                                <h3>HTML to PDF</h3>
                                <p>Convert html to PDF online</p>
                            </div>
                            </Link>
                            <Link href={''}>
                            <div className="icon-box">
                                <div className="icon">
                                    <Image
                                        src={'/images/pdf.png'}
                                        alt="Unduh Video Youtube"
                                        width={'100'}
                                        height={'100'}
                                    />
                                </div>
                                <h3>JSON to PDF</h3>
                                <p>Convert json to pdf online</p>
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