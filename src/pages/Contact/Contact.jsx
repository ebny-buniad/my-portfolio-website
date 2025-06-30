import React from 'react';
import PageHeader from '../../components/PageHeader/PageHeader';
import { Link, NavLink, useLoaderData } from 'react-router';
import { MdKeyboardArrowRight } from "react-icons/md";
import Container from '../../components/Container/Container';
import Card from '../../components/Card/Card';



const Contact = () => {
    const contactData = useLoaderData()
    console.log(contactData)
    return (
        <div>
            <PageHeader>
                <h2 className='text-4xl font-bold'>Contact</h2>
                <div className='flex items-center justify-center'>
                    <Link to='/'>Home</Link>
                    <MdKeyboardArrowRight size={25} />
                    <NavLink to='/contact'>Contact</NavLink>
                </div>
            </PageHeader>

            <Container>
                <div className='md:grid grid-cols-3 gap-3'>
                    {
                        contactData.map(data =>
                            <Card>
                                <div className='p-5 bg-gray-900'>
                                    <h2 className="card-title">{data.title}</h2>
                                    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                                </div>
                            </Card>

                        )
                    }
                </div>
            </Container>
        </div>
    );
};

export default Contact;