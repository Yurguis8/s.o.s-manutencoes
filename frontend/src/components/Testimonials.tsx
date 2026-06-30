import React from 'react';
import { TESTIMONIALS } from '../data/landingData';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="depoimentos" className="py-24 bg-[#F6F8FA] border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto px-6">
        
        {/* Minimalist Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-3">
            Clientes e Especialistas
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">
            Confiança de arquitetos e proprietários
          </h2>
          <p className="text-base text-gray-600">
            Saiba como nossa estrutura corporativa resolve definitivamente a instabilidade técnica na manutenção residencial.
          </p>
        </div>

        {/* Clean Corporate Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((item) => (
            <div 
              key={item.id}
              className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col justify-between shadow-xs"
            >
              <div>
                <Quote className="w-5 h-5 text-gray-300 mb-6" />

                <p className="text-sm text-gray-700 leading-relaxed font-normal mb-8">
                  "{item.content}"
                </p>
              </div>

              <div className="flex items-center gap-3 pt-6 border-t border-gray-100">
                <img 
                  src={item.avatar} 
                  alt={item.name} 
                  className="w-10 h-10 rounded-full object-cover border border-gray-200"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-semibold text-gray-900">
                    {item.name}
                  </span>
                  <span className="text-[11px] text-gray-500">
                    {item.role} · {item.companyOrLocation}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
