/* eslint-disable no-unused-vars */
import React from 'react';
import banner1 from '../../../assets/parent1.jpg'
import banner2 from '../../../assets/parent2.jpg'
import banner3 from '../../../assets/parent3.webp'
import banner4 from '../../../assets/banner5.jpg'
const ParentSay = () => {
    return (
        <div>
            <h2 className='text-5xl mt-12 mb-12 font-semibold bg-slate-900 h-[100px] text-center text-white p-4 w-11/12 ml-16'>What Parent say About Us</h2>
            <div className='md:grid grid-cols-2'>
                <div>
                    <div className="avatar ml-96">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={banner1} />
                        </div>
                    </div>
                </div>
                <div>
                    <p className=' mr-40 text-lg text-zinc-600'>Instructor was very engaging and took time to answer questions. She spent time working with each child and was very patient. Her enthusiasm for the topic was helpful and Michael has been spending time working on his stories/drawing this entire weekend. He is so excited about learning more about this area.  -Wendy K. </p>
                </div>
            </div>
            <div className='md:grid grid-cols-2 mt-10'>
                <div>
                    <div className="avatar ml-96">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={banner2} />
                        </div>
                    </div>
                </div>
                <div>
                    <p className=' mr-40 text-lg text-zinc-600'>Giovanni had an amazing time learning how to code with Roblox and we, as parents, we were very impressed. His teacher was helpful and Giovanni had a great time learning from him. Thank you so much for the amazing opportunity!  -Chris F. </p>
                </div>
            </div>
            <div className='md:grid grid-cols-2 mt-10'>
                <div>
                    <div className="avatar ml-96">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={banner3} />
                        </div>
                    </div>
                </div>
                <div>
                    <p className=' mr-40 text-lg text-zinc-600'>My son is a beginner at computers but is interested in computer animation, and this course really motivated him. His instructor was great at explaining things and got my son even more excited to explore animation. This was just what we needed to keep my son (and us parents) from losing our minds during lock-down homeschooling. Thank you!!  -Barbara B.</p>
                </div>
            </div>
            <div className='md:grid grid-cols-2 mt-10'>
                <div>
                    <div className="avatar ml-96">
                        <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src={banner4} />
                        </div>
                    </div>
                </div>
                <div>
                    <p className=' mr-40 text-lg text-zinc-600'>Loi did a great job with the kids!  His patience, problem solving skills and enthusiasm really kept them engaged.  Whatever you pay him, you should double it! Cade looks forward to having another class with him! The tech support team was fantastic helping us work through getting programs installed on Sunday before camp.  It made a big difference having everything ready to go ahead of the camp.  -Kristin O.</p>
                </div>
            </div>
        </div>
    );
};

export default ParentSay;