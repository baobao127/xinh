const [view, setView] = useState('grid');

<ViewToggle view={view} setView={setView} />

<div className={view === 'grid' ? 'grid grid-cols-2 gap-4' : 'space-y-4'}>
  {products.map(p => (
    <div className="border p-2">{p.name}</div>
  ))}
</div>
  {loading
  ? Array.from({ length: 8 }).map((_, i) => <SkeletonProduct key={i} />)
  : products.map(...) }
