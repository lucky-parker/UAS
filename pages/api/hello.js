// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  res.status(200).json(
    {dataMusimpanas:[{nama_tanaman: 'kacang tanah'},
     {nama_tanaman: 'kentang'},
     {nama_tanaman: 'melon'},
     {nama_tanaman: 'kedelai'},
     {nama_tanaman: 'ubi jalar'},
     {nama_tanaman: 'semangka'}
    ]  }
    )
}
