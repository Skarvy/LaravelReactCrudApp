import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, Link,useForm,  } from '@inertiajs/react';
import { useState } from 'react';

function Edit({ auth ,contact}) {
  const { data, setData, put, processing, errors } = useForm({
    name: contact.name,
    email: contact.email,
    phone: contact.phone, 
  })
  
  function submit(e) {
    e.preventDefault()      
    put(route('contact.update',contact))
  }
  
  return (
    <AuthenticatedLayout
      user={auth.user}
      header={
        <div className="flex justify-between">
          <h2 className="font-semibold text-xl text-gray-800 leading-tight">Editar Contacto</h2>
          <Link href={route("contact.index")} className="text-blue-500 hover:underline">Contactos</Link>
        </div>
      }
    >
      <Head title="Create Contact" />

      <div className="py-12">
        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={data.name}
                  placeholder="Nombre"
                  onChange={e => setData('name', e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                  {errors.name && <div>{errors.name}</div>}
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={data.email}
                  placeholder="Email"
                  onChange={e => setData('email', e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                  {errors.email && <div>{errors.email}</div>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Celular</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={data.phone}
                  placeholder="Celular"
                  onChange={e => setData('phone', e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                />
                  {errors.phone && <div>{errors.phone}</div>}
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  Guardar cambios
                </button>
              </div>
            </form>

            
          </div>
        </div>
      </div>
    </AuthenticatedLayout>
  );
}

export default Edit;
