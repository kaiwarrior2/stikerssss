self.addEventListener('push', e => {
  const data = e.data ? e.data.json() : { title: 'Stikers', body: 'Новое сообщение' };
  e.waitUntil(self.registration.showNotification(data.title, {
    body: data.body,
    icon: '/img/stikers.png',
    badge: '/img/stikers.png',
    vibrate: [200, 100, 200]
  }));
});

self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(clients.openWindow('/'));
});
