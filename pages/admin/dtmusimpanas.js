//@ts-check

//import useSWR from 'swr'

//async function fetcher(url){
    //const res = await fetch(url);
    //return res.json();}
import {useDatapns} from '../../lib/swr.fatch'
const dtmusimpanas = () => {

//url
//const url = "http://localhost:3000/api/hello";
//data dan error
//const {data, error} = useSWR(url, fetcher);
 
const {data , error} = useDatapns();

if(error){
    return <div>Error loading</div>
}
if(!data){
    return <div>Loading</div>
}

//Console.log(data);
    return (
        <div className='container w-75 mx-auto py-4'>
            <h3 className='font-bold'>TANAMAN MUSIM PANAS</h3>
            <table className = "table"></table>
            <thead>
   
                <tr>
                    <th>Kode</th>
                    <th>Nama Tanaman</th>
                    <th>Masa Tanaman/bulan</th>

                </tr> 
            </thead>
            
            <tbody>
            {data.map((pns, dix) => (
                <tr key ={dix}>
                    <td>
                        {pns.kode}
                    </td>
                    <td>
                        {pns.nama_tanaman}
                    </td>
                    <td>
                        {pns.masa_tanam_bulan}
                    </td>
                </tr>                
            ))  
            }
        </tbody>
    
        </div>
    );
}

export default dtmusimpanas;