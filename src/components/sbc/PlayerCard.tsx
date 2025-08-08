import Card from '../ui/Card'

export interface PlayerCardProps {
  name: string
  rating: number
  position: string
  nation?: string
  club?: string
  imageSrc: string
}

export default function PlayerCard({ name, rating, position, nation, club, imageSrc }: PlayerCardProps) {
  return (
    <Card className="p-4 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/10 to-transparent pointer-events-none" aria-hidden />
      <div className="flex items-center justify-center">
        <img src={imageSrc} alt={name} className="h-40 object-contain drop-shadow-[0_6px_20px_rgba(250,204,21,0.25)]" />
      </div>
      <div className="mt-3">
        <div className="flex items-center justify-center gap-3 text-yellow-400">
          <span className="text-3xl font-extrabold">{rating}</span>
          <span className="text-sm font-bold uppercase tracking-widest text-slate-200">{position}</span>
        </div>
        <h3 className="mt-1 text-lg font-extrabold">{name}</h3>
        <div className="mt-2 flex items-center justify-center gap-2 text-xs text-slate-300">
          {nation ? <span className="px-2 py-0.5 rounded-full bg-slate-800/70 border border-slate-700">{nation}</span> : null}
          {club ? <span className="px-2 py-0.5 rounded-full bg-slate-800/70 border border-slate-700">{club}</span> : null}
        </div>
      </div>
    </Card>
  )
}


