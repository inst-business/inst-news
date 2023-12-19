import React from 'react'

import { MainLayout } from '@/components/shared/Layout'

const breadcrumbLinks = [
  { title: 'Categories', url: '/categories' }
]

const CategoriesPage = () => {
  return (
    <MainLayout breadcrumb={breadcrumbLinks}>
      <p>CategoriesPage</p>
    </MainLayout>
  )
}

export default CategoriesPage