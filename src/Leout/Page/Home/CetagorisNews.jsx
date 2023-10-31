import { useEffect, useState } from "react";
import { AiFillEye } from "react-icons/ai";
import { Link, useParams } from "react-router-dom";


const CetagorisNews = () => {
    const [cetagryNewsA, setCetagryNews] =useState([])
    const { id } = useParams();
    // const news = useLoaderData();
    useEffect(()=>{
        fetch('../../../../public/data/news.json')
        .then(res => res.json())
        .then(data => setCetagryNews(data))
    },[])
    console.log(id)
    const cetagryNews = cetagryNewsA.filter(Anew => {
        if(id == 0){
           return Anew.category_id == Anew.category_id
        }
        else{
            return Anew.category_id == id
        }
    })
    console.log(cetagryNews)
    return (
        <div>
            {
                cetagryNews.map(newsB => <div key={newsB._id}>

<div className="card  bg-base-100 shadow-xl mb-4">
                    <figure><img src={newsB.image_url} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{newsB.title}</h2>
                        {
                            newsB.details.length > 200 ? <p>{newsB.details.slice(0, 200)} <Link
                                to={`/news/${newsB._id}`}
                                className="text-green-600"
                            >Read More ...</Link> </p> : <p>details</p>
                        }
                        <hr />
                        <div className="flex justify-between">
                            <div className="">
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />

                                </div>


                            </div>
                            <div className=" flex items-center">
                                <span><AiFillEye className="mr-2"></AiFillEye></span>
                                <p>{newsB.total_view}</p>

                            </div>
                        </div>
                    </div>
                </div>




                </div>)
            }
        </div>
    );
};

export default CetagorisNews;