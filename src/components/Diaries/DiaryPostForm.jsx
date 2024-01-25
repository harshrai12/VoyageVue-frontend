import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';

export default function DiaryPostForm({ openD, setOpenD }) {
  const [formData, setFormData] = useState({
    destination: '',
    date: '',
    description: '',
    itinerary: '',
    image: null,
    visibility: 'public',
  });

  const cancelButtonRef = useRef(null);

  const handleInputChange = (event) => {
    const { name, value, type } = event.target;
    setFormData({ ...formData, [name]: type === 'file' ? event.target.files[0] : value });
  };

  const handleDiaryPost = async (event) => {
    event.preventDefault();
    const token = localStorage.getItem('token');
  
    try {
      const response = await fetch('https://zealous-sunglasses-slug.cyclic.app/diary-posts', {
        method: 'POST',
        body: new FormData(event.target),
        headers: {
          Authorization: `Bearer ${token}`,
        }, // Use the form directly
      });
  
      console.log(formData);
  
      if (!response.ok) {
        console.error('Diary post creation failed'); 
        return;
      }
  
      const data = await response.json();
      console.log(data);
  
      setOpenD(false);
    } catch (error) {
      console.error('Error creating diary post:', error);
    }
  };
  

  return (

    <Transition.Root show={openD} as={Fragment}>
      <Dialog as="div" className="relative z-10  " initialFocus={cancelButtonRef} onClose={() => setOpenD(false)}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 backdrop-blur-sm bg-opacity-100 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex  mt-14 items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
            <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:max-w-lg sm:w-full mx-4 h-3/4 md:"> {/* Adjust the height for large and medium screens */}
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                      Diary Entry
                    </h2>
                  </div>

                  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
  <form onSubmit={handleDiaryPost} className="space-y-6" action="#" method="POST">
    <div className="flex space-x-4">
      <div className="w-1/2">
        <label htmlFor="destination" className="block text-sm font-medium leading-6 text-gray-900">
          Destination
        </label>
        <div className="mt-2">
          <input
            id="destination"
            name="destination"
            type="text"
            autoComplete="off"
            required
            value={formData.destination}
            onChange={handleInputChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="w-1/2">
        <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">
          Date
        </label>
        <div className="mt-2">
          <input
            id="date"
            name="date"
            type="date"
            required
            value={formData.date}
            onChange={handleInputChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>
    </div>

    <div className="flex space-x-4">
      <div className="w-1/2">
        <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
          Description
        </label>
        <div className="mt-2">
          <textarea
            id="description"
            name="description"
            rows="4"
            required
            value={formData.description}
            onChange={handleInputChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          ></textarea>
        </div>
      </div>

      <div className="w-1/2">
        <label htmlFor="itinerary" className="block text-sm font-medium leading-6 text-gray-900">
          Itinerary
        </label>
        <div className="mt-2">
          <textarea
            id="itinerary"
            name="itinerary"
            rows="4"
            required
            value={formData.itinerary}
            onChange={handleInputChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          ></textarea>
        </div>
      </div>
    </div>

    <div className="flex space-x-4">
      <div className="w-1/2">
        <label htmlFor="image" className="block text-sm font-medium leading-6 text-gray-900">
          Image
        </label>
        <div className="mt-2">
          <input
            id="image"
            name="image"
            type="file"
            accept="image/*"
            onChange={handleInputChange}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
      </div>

      <div className="w-1/2">
        <label htmlFor="visibility" className="block text-sm font-medium leading-6 text-gray-900">
          Visibility
        </label>
        <div className="mt-2">
          <select
            id="visibility"
            name="visibility"
            onChange={handleInputChange}
            value={formData.visibility}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          >
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
        </div>
      </div>
    </div>

    <div>
      <button
        type="submit"
        className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      >
        Add Diary Entry
      </button>
    </div>
  </form>
</div>

                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
