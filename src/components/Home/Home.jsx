import OneBook from '../../../public/Files/Banner.jpg';
import '../../index.css'
const Home = () => {
  return (
    <div className="bg-[#F3F3F3] rounded-3xl px-24 py-20 mt-12">
      <div className='flex items-center justify-around'>
        <div className='space-y-8'>
          <h2 className='playfair text-[56px] font-bold text-[#131313]'>
            Books to freshen up <br />
            your bookshelf
          </h2>
          <button className="px-6 py-3 bg-[#23BE0A] rounded-lg text-white font-semibold text-xl">
            View The List
          </button>
        </div>
        <div className='max-h-[394px] max-w-[318px]'>
            <img src={OneBook} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
