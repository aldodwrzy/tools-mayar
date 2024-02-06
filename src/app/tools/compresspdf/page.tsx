export default function CompressPdf() {
    return (
        <>
            <div className="col-sm-9">
                <div className="header-select-main" id="upload-image">
                    <div className="main-heading">
                        <div className="inner-heading">
                            <h1>Compress PDF</h1>
                        </div>
                    </div>           
                    <div id="before-file-container">
                        <div id="uploadimage" className="select-zone-main big-select-zone">
                            <input type="file" id="file-selection" className="hide-part" multiple accept="application/pdf,.pdf" value='' />
                                <div className="select-zone-inner" id="img-select-cont">
                                    <div className="drop-file-text">
                                        <span>Drop PDF files here to start compressing</span>
                                    </div>
                                    <div className="drop-file-button">
                                        <button id="open-file" className="btn btn-big pulsingButton">Select PDF</button>
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>
                
                <div className="popup-main"  id="popup-main-container" style={{display: 'none'}}>
                    <div className="popup-box-background"></div>
                        <div className="popup-box" style={{display: 'block'}}>
                            <div className="popup-message">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#0067b8" height="48" width="48"><path d="M4.6 42q-.85 0-1.3-.75-.45-.75 0-1.5l19.4-33.5q.45-.75 1.3-.75.85 0 1.3.75l19.4 33.5q.45.75 0 1.5t-1.3.75Zm19.6-22.6q-.65 0-1.075.425-.425.425-.425 1.075v8.2q0 .65.425 1.075.425.425 1.075.425.65 0 1.075-.425.425-.425.425-1.075v-8.2q0-.65-.425-1.075-.425-.425-1.075-.425Zm0 16.75q.65 0 1.075-.425.425-.425.425-1.075 0-.65-.425-1.075-.425-.425-1.075-.425-.65 0-1.075.425Q22.7 34 22.7 34.65q0 .65.425 1.075.425.425 1.075.425Z"/></svg>
                                <p>You have selected Image. For compressing Image, click on 'OK' or visit</p>
                                <a href="https://imagecompressor.11zon.com/en/image-compressor/" style={{fontSize: '14px'}}>https://imagecompressor.11zon.com/en/image-compressor/</a>
                            </div>
                            <div className="btns-main">
                                <button className="btn btn-active btn-small btn-cancel" id="cancel-btn">Cancel</button>
                                <a className="btn btn-active btn-small btn-continue" href="https://imagecompressor.11zon.com/en/image-compressor/" style={{fontSize: '14px', lineHeight: '1.0'}}>Ok</a>
                            </div>
                        </div>
                </div>
                                
                <div className="customization-setting-main" id="after-file-container" style={{display: 'none'}}>
                    <div className="customization-setting-inner" style={{textAlign: 'center'}}>
                        <div className="compress-file-main">
                            <div className="compress-file-text">
                                <div className="text-file-inner">
                                    <span>Compression Level</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" style={{marginLeft: '2px'}} height="18px" viewBox="0 0 24 24" width="18px" fill="#a1a1a1"><path d="M0 0h24v24H0z" fill="none"/><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>
                                </div>
                                <div className="compress-file-msg">
                                    <span>Higher percentage will compress more PDF size.</span>
                                </div>
                            </div>
                            <div className="compress-file-inner">
                                <div className="file-slider-main">
                                    <div className="compress-file-slider" id="c-s-c">
                                        <input type="range" min="1" max="100" id="compress-range" value="50"></input>
                                    </div>
                                    <div className="compress-file-percent tb-center">
                                        <span id="percent-text" style={{display: 'none'}}>50</span>
                                        <input id="compress-input-range" type="number" className="compress-input-value" min="1" max="100" value="60"></input>
                                        <span>%</span>
                                    </div>
                                </div>
                                    <div className="all-center-w">
                                        <button className="btn btn-active btn-small" id="apply-button">Compress</button><button className="btn btn-disabled btn-small" style={{display: 'none'}} id="disabled-apply-button">Compress</button>
                                        <button  className="btn btn-small" >Delete All</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="docs-preview-main" id="container-box" style={{display: 'none'}}>
                    <div className="file-preview-list" id="page-view-list"></div>
                </div>
                <div className="custom-sticky-main" style={{display: 'none'}} id="custom-sticky">
                    <div className="add-more-file-inner" id="add-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="54px" height="54px" viewBox="0 0 48 48"><path d="M24,4A20,20,0,1,0,44,24,20,20,0,0,0,24,4Z" style={{fill: '#0067b8'}}/><path d="M32,26.14H26v6a2,2,0,0,1-4,0v-6H16a2,2,0,0,1,0-4h6v-6a2,2,0,0,1,4,0v6h6a2,2,0,0,1,0,4Z" style={{fill: '#fff'}}/></svg>
                    </div>
                    <div className="add-more-file-inner delete-file-inner">
                        <svg xmlns="http://www.w3.org/2000/svg" width="54px" height="54px" viewBox="0 0 48 48"><path d="M24,4A20,20,0,1,0,44,24,20,20,0,0,0,24,4Z" style={{fill: '#0067b8'}}></path><path d="M16.7,32.7a2.49,2.49,0,0,0,2.46,2.5H29a2.47,2.47,0,0,0,2.4-2.5V18.1H16.7ZM28,14l-.6-.6a.82.82,0,0,0-.8-.3H21.4a1.12,1.12,0,0,0-.8.3L20,14a1.17,1.17,0,0,1-.8.3H16.5a1.1,1.1,0,0,0-1.1,1.1v.3a1.12,1.12,0,0,0,1.1,1.1h15a1.12,1.12,0,0,0,1.1-1.1v-.3a1.1,1.1,0,0,0-1.1-1.1H28.7A1,1,0,0,1,28,14Z" style={{fill: '#fff'}}></path><rect x="20.96" y="21.4" width="1.43" height="10.11" rx="0.72" style={{fill: '#0067b8'}}/><rect x="25.57" y="21.4" width="1.43" height="10.11" rx="0.72" style={{fill: '#0067b8'}}/></svg>
                    </div>
                    <div className="download-docs-inner">
                        <div>
                            <button className="btn btn-active download-btn-select" id="open-files">Select PDF</button>
                        </div>
                        <div className="tb-center">
                            <svg className="delete-download-zip" xmlns="http://www.w3.org/2000/svg" width="48px" height="48px" viewBox="0 0 48 48"><path d="M24,4A20,20,0,1,0,44,24,20,20,0,0,0,24,4Z" style={{fill: '#0067b8'}}></path><path d="M16.7,32.7a2.49,2.49,0,0,0,2.46,2.5H29a2.47,2.47,0,0,0,2.4-2.5V18.1H16.7ZM28,14l-.6-.6a.82.82,0,0,0-.8-.3H21.4a1.12,1.12,0,0,0-.8.3L20,14a1.17,1.17,0,0,1-.8.3H16.5a1.1,1.1,0,0,0-1.1,1.1v.3a1.12,1.12,0,0,0,1.1,1.1h15a1.12,1.12,0,0,0,1.1-1.1v-.3a1.1,1.1,0,0,0-1.1-1.1H28.7A1,1,0,0,1,28,14Z" style={{fill: '#fff'}}></path><rect x="20.96" y="21.4" width="1.43" height="10.11" rx="0.72" style={{fill: '#0067b8'}}/><rect x="25.57" y="21.4" width="1.43" height="10.11" rx="0.72" style={{fill: '#0067b8'}}/></svg>
                            <button className="btn btn-active pulsingButton download-btn-download movibtn" id="download-zip" style={{display: 'none'}}/><span id="zip-text">Download Zip</span><img src="data:image/gif;base64,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" id="zip-load" className="center-block img-responsive mediumLoader1" alt=""></img>
                            <button className="btn btn-active btn-disabled movibtn" id="disabled-download-zip" >Download Zip</button>
                        </div>
                    </div>
                </div>                      
            </div>
        </>
);
}