import { DashboardLayout } from "../layout/DashBoardLayout";
import { MaterialCard } from "../materials/MaterialCard";
import { MetaTags } from "../seo/MetaTags";


const materials = [
  {
    id: 1,
    title: 'NCLEX Practice Questions Pack',
    subject: 'Exam Preparation',
    type: 'PDF',
    uploadedAt: '2024-03-15T10:00:00Z',
    downloadUrl: '#'
  },
  {
    id: 2,
    title: 'Pharmacology Study Guide',
    subject: 'Pharmacology',
    type: 'PDF',
    uploadedAt: '2024-03-14T15:30:00Z',
    downloadUrl: '#'
  },
  {
    id: 3,
    title: 'Clinical Skills Checklist',
    subject: 'Clinical Practice',
    type: 'PDF',
    uploadedAt: '2024-03-13T09:15:00Z',
    downloadUrl: '#'
  }
];

export default function MaterialsPage() {
  return (
    <DashboardLayout>
      <MetaTags
        title="Study Materials"
        description="Access your nursing study materials and resources"
        keywords={['nursing materials', 'study resources', 'NCLEX prep']}
      />
      
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold">Study Materials</h1>
          <p className="text-gray-500">Access your study resources and materials</p>
        </div>
        
        <div className="grid gap-4">
          {materials.map((material) => (
            <MaterialCard key={material.id} {...material} />
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
}