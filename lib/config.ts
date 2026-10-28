export const site = {
  name: 'Dra. Marina Moura',
  phone: '+55 83 9969-7940',
  whatsapp: '558399697940',
  instagram: 'https://www.instagram.com/marinamoura.pediatra/',
  address: 'Av. João Cirilo da Silva, 221, Sala 7, Altiplano Cabo Branco, João Pessoa – PB',
  maps: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent('Av. João Cirilo da Silva, 221, Sala 7, Altiplano Cabo Branco, João Pessoa PB'),
};
export function whatsappLink(message = 'Olá! Gostaria de agendar uma consulta pediátrica.') {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}
