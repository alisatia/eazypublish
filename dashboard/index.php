<?php 
session_start();

if( !isset($_SESSION["id_user"]) ) {
	header("Location: ../../");
	exit;
}

require '../conn.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="react.css">
    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet'>
    <title>Dashboard</title>
</head>
<body>
    <div class="container">
        <!-- siderbar -->
        <div class="sidebar">
            <div class="title">
                <div class="img"></div>
            </div>
            <div id="nav" class="nav">
                <div></div>
                <div id="slide" class="slide">
                    <div class="satu"></div>
                    <div id="xdua" class="xdua"></div>
                    <div class="dua"></div>
                    <div class="tiga"></div>
                </div>
                <div class="dashboard">
                    <div id="dasi" class="icon" onclick="dashboard()"></div>
                    <div id="dast" class="text" onclick="dashboard()">Dashboard</div>
                </div>
                <div class="biaya">
                    <div id="biai" class="icon" onclick="biaya()"></div>
                    <div  id="biat"class="text" onclick="biaya()">Biaya</div>
                </div>
                <div class="status">
                    <div id="stai" class="icon" onclick="status()"></div>
                    <div  id="stat"class="text" onclick="status()">Status</div>
                </div>
                <div class="naskah">
                    <div id="nasi" class="icon" onclick="naskah()"></div>
                    <div  id="nast"class="text" onclick="naskah()">Naskah</div>
                </div>
                <div class="guidelines">
                    <div id="guii" class="icon" onclick="guidelines()"></div>
                    <div  id="guit"class="text" onclick="guidelines()">Guidelines</div>
                </div>
            </div>
        </div>

        <!-- blank -->
        <div class="blank1"></div>
        <div class="blank2"></div>
        <div class="blank3"></div>

        <!-- content -->
        <div class="content">
            <div class="header">
                <div class="tanggal">
                    <?php echo date('l, d F Y');?>
                </div>
                <div class="profil">
                    <div class="foto">
                        <img src="../files/<?php echo $dbpenulis['file_foto'] ?>" alt="">
                    </div>
                    <div class="akun"><?php echo $dbuser['username'] ?></div>
                </div>
            </div>
            <div id="child" class="child">
                <div id="child-dash" class="child-dash">
                    <div class="notif">
                        <div class="indikator"></div>
                        <div class="none"></div>
                        <a href="../unggah/" class="unggah">
                            <div class="icon"></div>
                            <div class="text">Unggah</div>
                        </a>
                    </div>
                    <div class="grafik"></div>
                    <div class="last"></div>
                </div>
                <div id="child-biaya">
                    <div id="cover">
                        <div id="judul"></div>
                        <div id="total"></div>
                    </div>
                    <div id="list-biaya"></div>
                    <div id="blank"></div>
                </div>
                <div id="child-status">
                    <div id="bar">
                        <div id="barjudul"></div>
                        <div id="riwayat"></div>
                    </div>
                    <div id="anime">
                        <div id="barH"></div>
                        <div id="animasi"></div>
                    </div>
                </div>
                <div id="child-naskah">
                    <div id="kategori"></div>
                    <div id="buku">
                        <div id="kate">
                            <div id="kates">Matematika</div>
                            <div id="liness"></div>
                            <div id="next">
                                <div id="pref"><</div>
                                <div id="nom">1</div>
                                <div id="nex">></div>
                            </div>
                        </div>
                        <div id="boke">
                            <div id="boxbook">
                                <img src="../files/cover.jpg" alt="">
                                <div id="bookjudul">Bikin Mobil</div>
                                <div id="bookpenulis">Ali</div>
                            </div>
                            <div id="lines"></div>
                            <div id="boxbook">
                                <img src="../files/cover.jpg" alt="">
                                <div id="bookjudul">Bikin Mobil</div>
                                <div id="bookpenulis">Ali</div>
                            </div>
                            <div id="lines"></div>
                            <div id="boxbook">
                                <img src="../files/cover.jpg" alt="">
                                <div id="bookjudul">Bikin Mobil</div>
                                <div id="bookpenulis">Ali</div>
                            </div>
                            <div id="lines"></div>
                            <div id="boxbook">
                                <img src="../files/cover.jpg" alt="">
                                <div id="bookjudul">Bikin Mobil</div>
                                <div id="bookpenulis">Ali</div>
                            </div>
                            <div id="lines"></div>
                            <div id="boxbook">
                                <img src="../files/cover.jpg" alt="">
                                <div id="bookjudul">Bikin Mobil</div>
                                <div id="bookpenulis">Ali</div>
                            </div>
                            <div id="liness"></div>
                            <div id="liness"></div>
                            <div id="liness"></div>
                            <div id="liness"></div>
                            <div id="liness"></div>
                            <div id="liness"></div>
                            <div id="liness"></div>
                            <div id="liness"></div>
                            <div id="liness"></div>
                            <div id="boxbook">
                                <img src="../files/cover.jpg" alt="">
                                <div id="bookjudul">Bikin Mobil</div>
                                <div id="bookpenulis">Ali</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="child-guidelines">
                    <div id="struktur">
                        <div id="logo"></div>
                        <div id="strukturs">
                            <div onmouseover="ssone(this)" onmouseout="ssone(this)" id="sone">Structure</div>
                            <div onmouseover="sstwo(this)" onmouseout="sstwo(this)" id="stwo">Word Limits</div>
                            <div onmouseover="ssthree(this)" onmouseout="ssthree(this)" id="sthree">Style Guidelines</div>
                            <div onmouseover="ssfour(this)" onmouseout="ssfour(this)" id="sfour">Formating and Templates</div>
                            <div onmouseover="ssfive(this)" onmouseout="ssfive(this)" id="sfive">Processing Time</div>
                            <div onmouseover="sssix(this)" onmouseout="sssix(this)" id="ssix">Price Estimation</div>
                        </div>
                    </div>
                    <div id="isi">
                        <h2 id="h1">The Guidelines for Printing Book with ISBN</h2>
                        <div id="ione">
                            <h3>Structure</h3><br>
                            <p>Your paper should be compiled in the following order:</p><br>
                            <li>title page;</li><li>abstract;</li><li>keywords;</li><li>main text introduction, materials and methods, results, discussion;</li><li>acknowledgments;</li><li>declaration of interest statement;</li><li>references;</li>
                            <li>appendices (as appropriate);</li><li>table(s) with caption(s) (on individual pages);</li><li>figures;</li><li>figure captions (as a list).</li>
                        </div>
                        <div id="itwo">
                            <h3>Word Limits</h3><br>
                            <p>Please include a word count for your paper. A typical paper for this journal should be no more than 7500 words, inclusive of:</p><br>
                            <li>Abstract</li><li>Tables</li><li>References</li><li>Figure or table captions</li>
                        </div>
                        <div id="ithree">
                            <h3>Style Guidelines</h3><br>
                            <p>Please refer to these quick style guidelines when preparing your paper, rather than any published articles or a sample copy.</p>
                            <p>Please use British (-ize) spelling style consistently throughout your manuscript.</p>
                            <p>Please use single quotation marks, except where ‘a quotation is “within” a quotation’.</p>
                            <p>Please note that long quotations should be indented without quotation marks.</p>
                        </div>
                        <div id="ifour">
                            <h3>Formatting and Templates</h3><br>
                            <p>Papers may be submitted in Word or LaTeX formats. Please do not submit your paper as a PDF. Figures should be saved separately from the text. To assist you in preparing your paper, we provide formatting template(s).</p>
                            <p>Word templates are available for this journal. Please save the template to your hard drive, ready for use.</p>
                            <p>A LaTeX template is available for this journal. Please save the LaTeX template to your hard drive and open it, ready for use, by clicking on the icon in Windows Explorer. If you are not able to use the template via the links (or if you have any other template queries) please contact us here.</p>
                        </div>
                        <div id="ifive" >
                            <h3>Processing Time</h3><br>    
                            <p>processing time</p>
                        </div>
                        <div id="isix" >
                            <h3>Price Estimation</h3><br>
                            <p>To check the book price click <a href="../cekharga">here</a>.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <script src="script.js"></script>
</body>
</html>