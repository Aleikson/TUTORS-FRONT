import { Button } from 'flowbite-react';
import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import CommentSection from '../components/CommentSection';

export default function PostPage() {
  return (
    <main className='p-3 flex flex-col max-w-6xl mx-auto min-h-screen'>
      <h1 className='text-3xl mt-10 p-3 text-center font-serif max-w-2xl mx-auto lg:text-4xl'></h1>
      <Link className='self-center mt-5'>
        <Button color='gray' pill size='xs'></Button>
      </Link>
      <div className='flex justify-between p-3 border-b border-slate-500 mx-auto w-full max-w-2xl text-xs'>
        <span></span>
        <span className='italic'></span>
      </div>
      <div className='p-3 max-w-2xl mx-auto w-full post-content'></div>
      <div className='max-w-4xl mx-auto w-full'>
        <CallToAction />
      </div>
      <CommentSection />

      <div className='flex flex-col justify-center items-center mb-5'>
        <h1 className='text-xl mt-5'></h1>
        <div className='flex flex-wrap gap-5 mt-5 justify-center'></div>
      </div>
    </main>
  );
}
