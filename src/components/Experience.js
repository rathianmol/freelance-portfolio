import React from 'react';
import iClassProBanner from '../assets/iClassPro.png';
import methodLearning from '../assets/methodLearning.png';
import givePulse from '../assets/givePulse.png';
import webkulUVDesk from '../assets/webkulUVdesk.png';
import utArlington from '../assets/utArlington.png';
import keys2Please from '../assets/keys2Please.png';

const Experience = () => {
  return (
    <>
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Experience
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
         {/* Row 2, Column 1 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 flex items-center justify-center">
            <img src={keys2Please} alt="Keys 2 Please" className="max-w-full max-h-full object-contain"></img>
        </div>

        {/* Row 2, Column 2 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Freelance Web Development
          </h3>
          <p className="text-gray-700">
            Developed website for client regarding client's automotive locksmithing small business.
            Implemented Search Engine Optimization for customer tracktion.
            <br />
            <br />
            Tech Stack: React JS
          </p>
        </div>
        {/* Row 1, Column 1 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Full Stack Laravel Developer
          </h3>
          <p className="text-blue-600 font-medium mb-2">iClassPro, Inc.</p>
          <p className="text-gray-600 text-sm mb-4">2022 - March 2025</p>
          <p className="text-gray-700">
            Development of Class Management Software for Gymnastics, Cheer Swim and Dance.
            <br />Stack: Laravel, Angular, Angular JS, React 
          </p>
        </div>

        {/* Row 1, Column 2 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <img src={iClassProBanner} alt="iClassPro, Inc"></img>
        </div>

        {/* Row 2, Column 1 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <img src={methodLearning} alt="Method Learning"></img>
        </div>

        {/* Row 2, Column 2 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Full Stack Lavavel Developer
          </h3>
          <p className="text-blue-600 font-medium mb-2">Method Learning</p>
          <p className="text-gray-600 text-sm mb-4">Dec 2021 - May 2022</p>
          <p className="text-gray-700">
            Maintaining, enhancing and creating SAT/ACT test prep software along with reporting tools for Student's progress for Teachers, Tutors and Parents.
            <br />
            Tech Stack: Laravel 8+, Vue JS
          </p>
        </div>

        {/* Row 3, Column 1 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Laravel API Developer
          </h3>
          <p className="text-blue-600 font-medium mb-2">GivePulse</p>
          <p className="text-gray-600 text-sm mb-4">May 2021 - Oct 2021</p>
          <p className="text-gray-700">
            Updated legacy back-end API to modern Laravel to empower events-related community engagement, used by Universities and businesses alike.
            <br />
            Stack: Laravel 8, Yii, React JS 
          </p>
        </div>

        {/* Row 3, Column 2 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <img src={givePulse} alt="GivePulse"></img>
        </div>

        {/* Row 4, Column 1 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <img src={webkulUVDesk} alt="Method Learning"></img>
        </div>

        {/* Row 4, Column 2 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Junior PHP Developer
          </h3>
          <p className="text-blue-600 font-medium mb-2">Webkul</p>
          <p className="text-gray-600 text-sm mb-4">May 2019 - Aug 2020</p>
          <p className="text-gray-700">
            Assisted in developing UVDesk, an open-source Ticket Management System.
            <br />
            Tech Stack: PHP/Symfony, Backbone.js 
          </p>
        </div>
      </div>
    </div>

    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Education
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Row 1, Column 1 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            The University of Texas at Arlington
          </h3>
          <p className="text-blue-600 font-medium mb-2">Bachelor's of Science, Computer Science</p>
          <p className="text-gray-600 text-sm mb-4">Aug 2013 - May 2017</p>
          <p className="text-gray-700">
            Coursework: OOP, Databases, Computer Networking, DSA, Software Engineering, Systems Design
          </p>
        </div>

        {/* Row 1, Column 2 */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 h-64 flex items-center justify-center">
          <img src={utArlington} alt="UT Arlington" className="max-w-full max-h-full object-contain"></img>
        </div>
      </div>
    </div>
    </>
  );
};

export default Experience;