import React from 'react';

export function Contact() {
  return (
    <div className="bg-orange-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-2/2 px-4">
            
            <div className="bg-[#033500] rounded-lg shadow-lg ">
              <h2 className="text-2xl font-bold mb-4 text-white">Our Commitment to You</h2>
              <div className="mb-4">
                <img
                  src="/src/assets/customercare.jpg"  
                  alt="Customer Care"
                  className="w-full h-auto rounded"
                />
              </div>
              <p className="text-white font-bold fs-700">
                At NutriLife, we are committed to providing exceptional customer service. <br />
                Our dedicated team in the customer care unit is here to assist you with any inquiries,
                 feedback, or support you may need. Your satisfaction is our priority.
              </p>
            </div>
          </div>
          <div className="w-full lg:w-2/2 px-4 height-2/2">
            <div className="bg-orange rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-4 text-white">Contact Us</h2>
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-2 text-white">Address</h3>
                <p className="text-gray-700 text-white">Luwumu st, Universal House</p>
                <p className="text-gray-700 text-white">Kampala, Uganda</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-2 text-white">Contact Information</h3>
                <p className="text-gray-700 text-white">Email: info@nutrilife.com</p>
                <p className="text-gray-700 text-white">Phone: (+256) 762-396-176</p>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-bold mb-2 text-white">Other Departments</h3>
                <p className="text-gray-700 text-white">Sales: sales@nutrilife.com</p>
                <p className="text-gray-700 text-white">Support: support@nutrilife.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}