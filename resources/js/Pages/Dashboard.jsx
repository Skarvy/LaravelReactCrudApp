import PrimaryButton from '@/Components/PrimaryButton';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head,Link } from '@inertiajs/react';

export default function Dashboard({ auth }) {
    return (
        <AuthenticatedLayout
            user={auth.user}
            header={<div className="flex justify-between">
                        <h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>
                        <Link href={route('contact.index')}>contactos</Link>
                    </div>
            }
           
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900"><p>Bienvenido </p> </div>
                        <PrimaryButton className='m-4'
                        ><Link href={route('contact.index')}>Contacto App</Link></PrimaryButton>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
