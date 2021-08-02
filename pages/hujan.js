import 'bootstrap/dist/css/bootstrap.min.css'
import Link from 'next/link' 
export default function Hujan() {
  return (
    <div>
      <div class="album py-5 bg-light">
    <div class="container">

      <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
        <div class="col">
          <div class="card shadow-sm">
            <img src = "https://www.kampustani.com/wp-content/uploads/2018/10/Cara-menanam-kangkung-darat-yang-benar.jpg" class = "img-thumbnail"></img>
            <div class="card-body"><h3>KANGKUNG</h3>
              <p class="card-text">masa tanam : 27 atau 30 hari <br></br> kangkung adalah syuran yang mudah di tanam dan sangat cepat pertumbuhanya, kangkung sangat cocok di tanam pada musim penghujan.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <Link href="/Kangkung"><button type="button" class="btn btn-sm btn-outline-secondary">View</button></Link>
                  
                </div>
              
              </div>
            </div>
          </div>
        </div>
        
        <div class="col">
          <div class="card shadow-sm">
          <img src = "https://dpmptsp.natunakab.go.id/wp-content/uploads/2017/06/padi.jpg" class = "img-thumbnail"></img>
            <div class="card-body"><h3>PADI</h3>
              <p class="card-text">masa tanam : 3 bulan <br></br> padi dapat ditanam sepanjang tahun, namun pada dasarnya petani menanam padi berdasarkan ketersediaan air.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <Link href="/Padi"><button type="button" class="btn btn-sm btn-outline-secondary">View</button></Link>
                </div>
                
              </div>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card shadow-sm">
          <img src = "https://mesinpertanian.id/wp-content/uploads/2020/03/budidaya-tanaman-bayam.jpg" class = "img-thumbnail"></img>
            <div class="card-body"><h3>BAYAM</h3>
              <p class="card-text">masa tanam : 15 atau 20 hari <br></br> Bayam adalah tumbuhan yang biasa ditanam untuk dikonsumsi daunnya sebagai sayuran hijau.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <Link href="/Bayam"><button type="button" class="btn btn-sm btn-outline-secondary">View</button></Link>
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
          <img src = "https://doktersehat.com/wp-content/uploads/2018/05/doktersehat-selada.jpg" class = "img-thumbnail"></img>
            <div class="card-body"><h3>SELADA</h3>
              <p class="card-text">masa tanam : 2 atau 3 bulan <br></br> Selada atau daun sla adalah tumbuhan sayur yang biasa ditanam di daerah beriklim sedang maupun daerah tropika. Kegunaan utama adalah sebagai salad.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <Link href="/Selada "><button type="button" class="btn btn-sm btn-outline-secondary">View</button></Link> 
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
          <img src = "https://hellomagetan.com/wp-content/uploads/2019/12/Daun-Bawang.jpg" class = "img-thumbnail"></img>
            <div class="card-body"><h3>DAUN BAWANG</h3>
              <p class="card-text">masa tanam : 2,5 bulan <br></br> Daun bawang adalah jenis sayuran dari kelompok bawang yang memiliki nama latin Allium fistulosum.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>  
                </div>
                
              </div>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card shadow-sm">
          <img src = "https://cdn-3.tstatic.net/jualbeli/img/njajal/2020/2/Manfaat-Kesehatan-Konsumsi-Sawi-Putih--Obat-Murah-untuk-4-Penyakit-Ini-master-692816538.jpg" class = "img-thumbnail"></img>
            <div class="card-body"><h3>SAWI PUTIH</h3>
              <p class="card-text">masa tanam : 18 atau 20 hari <br></br> Disebut sawi putih karena daunnya yang cenderung kuning pucat dan tangkai daunnya putih. Sawi putih dapat dilihat penggunaannya pada asinan, dalam capcai, atau pada sup bening.</p>
              <div class="d-flex justify-content-between align-items-center">
                <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>  
                </div>
                
              </div>
            </div>
          </div>
        </div>
    </div>
    </div>
    </div>
    </div>
    
  )
}
