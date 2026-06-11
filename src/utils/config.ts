export const SITE_CONFIG = {
  siteName: 'drumdecreasta',
  siteTitle: 'drumdecreasta | Ghid de Munte Profesionist',
  siteDescription: 'Tururi montane în Carpații Români cu un ghid profesionist cu experiență militară în alpinism și navigație montană.',
  author: 'Alexandru Cristian',
  email: 'contact@drumdecreasta.ro',
  location: 'Carpații Români',
  phone: '+40 123 456 7890',
  baseUrl: 'https://drumdecreasta.ro',
};

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('ro-RO', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}

export function calculateReadingTime(content: string): number {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

export function getDifficultyColor(difficulty: string): string {
  const colors: Record<string, string> = {
    'Ușor': 'bg-green-500/20 text-green-400 border-green-500/30',
    'Moderat': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    'Dificil': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    'Foarte dificil': 'bg-red-500/20 text-red-400 border-red-500/30',
  };
  return colors[difficulty] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
}

export function getStatusBadge(status: string): { text: string; color: string } {
  const badges: Record<string, { text: string; color: string }> = {
    'disponibil': { text: 'Disponibil', color: 'bg-green-500/20 text-green-400' },
    'sold-out': { text: 'Sold Out', color: 'bg-red-500/20 text-red-400' },
    'pe-cerere': { text: 'Pe Cerere', color: 'bg-blue-500/20 text-blue-400' },
  };
  return badges[status] || { text: status, color: 'bg-gray-500/20 text-gray-400' };
}
