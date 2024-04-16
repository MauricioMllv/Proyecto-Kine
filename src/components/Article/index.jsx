import img from '../../assets/img/banner-article.png'

const Article = () => {
    return (
        <article className="flex flex-col justify-center">
            <div className="">
                <img className='' src={img} alt="" />
                <h2 className="flex justify-center text-5xl font-bold text-white drop-shadow-[0_2.5px_1.2px_rgba(0,0,0,0.8)] border-black absolute inset-80">Lorem ipsum dolor sit amet</h2>
            </div>
            <div className="py-5 px-10 mx-10">
                <p className="text-base text-balance py-4 px-10">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro earum rerum fugit qui nostrum debitis, sed, facere obcaecati sint placeat dignissimos quia ut velit unde voluptatem quam? Rem quo nesciunt culpa aperiam illum dolores consectetur! Natus aperiam, modi voluptates atque qui ducimus. Similique porro molestias nisi eius iure illum natus facilis mollitia aliquid voluptates debitis enim ab veniam officia praesentium non iusto, voluptatibus fuga animi architecto sit in eligendi? Quo, tempore expedita, eaque natus numquam voluptatum nihil aliquid accusantium iure, ab cum. Reiciendis quas eaque officia corrupti similique sit dolore tempore ipsam cumque veritatis quisquam deleniti, autem eligendi odio quasi tenetur quaerat consectetur assumenda voluptatum ut eveniet animi ratione nam obcaecati? Dolorum, ullam rem. Facilis porro officia, sed aliquam perferendis ab inventore accusantium, voluptatem perspiciatis tempora molestias repellat, ipsam quis molestiae dolorem veniam. Atque tempore harum unde. Reiciendis, cum? Praesentium assumenda unde aliquid optio repellat consequatur reiciendis ab id amet!</p>
            </div>
        </article>
    );
};

export default Article;