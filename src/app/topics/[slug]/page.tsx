interface TopicShowPageProps {
  params: Promise<{ slug: string }>
}

export default async function TopicShowPage({ params }: Readonly<TopicShowPageProps>) {
  const slug = (await params).slug
  return (
    <div className="grid grid-cold-4 gap-4 p-4">
      <div className="col-span-3">
        <h1 className="text-2xl font-bold mb-2">
          {slug}
        </h1>
      </div>

      <div>
        
      </div>
    </div>
  )
}