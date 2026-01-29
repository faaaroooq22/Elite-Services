
import React from 'react';
import { POLICIES } from '../constants';

const PolicySection: React.FC = () => {
  return (
    <section id="policies" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-blue-50 rounded-lg text-blue-700 mr-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04c0 4.833 1.277 9.474 3.5 13.39L12 21l3.118-1.63a11.959 11.959 0 013.5-13.39z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Academic Integrity</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {POLICIES.academicIntegrity}
              </p>
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-red-50 rounded-lg text-red-700 mr-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-red-900">Content Notice</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">
                {POLICIES.contentNotice}
              </p>
            </div>
            <div className="p-8">
              <div className="flex items-center mb-4">
                <div className="p-2 bg-green-50 rounded-lg text-green-700 mr-3">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Refund Policy</h3>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed italic">
                {POLICIES.refundPolicy}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicySection;
