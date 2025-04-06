import React from 'react'

const BreadcrumbItems = () => {
  // Breadcrumb items
  const breadcrumbItems = [
    { name: 'Human', link: '/' },
    { name: 'Clothing', link: '/clothing' },
    { name: 'Man wear', link: '/clothing/man-wear' },
    { name: 'Summer clothing', link: null },
  ];
  return (
    <>
    
      {/* Breadcrumb */}
            <div className="bg-gray-50 py-4">
              <div className="max-w-5xl mx-auto">
                <nav className="flex space-x-2 text-base text-gray-600">
                  {breadcrumbItems.map((item, index) => (
                    <React.Fragment key={index}>
                      {index > 0 && <span className="text-gray-400">/</span>}
                      {item.link ? (
                        <a href={item.link} className="hover:text-blue-500">
                          {item.name}
                        </a>
                      ) : (
                        <span className="text-gray-800 font-semibold">{item.name}</span>
                      )}
                    </React.Fragment>
                  ))}
                </nav>
              </div>
            </div>
      
     
    </>
  )
}

export default BreadcrumbItems