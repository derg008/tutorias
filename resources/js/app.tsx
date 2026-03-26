import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

createInertiaApp({
    title: (title) => `${title} - Tutorías Platform`,

    // Configuración correcta para tu estructura (pages en minúscula)
    resolve: (name) => 
        resolvePageComponent(
            `./pages/${name}.tsx`,
            import.meta.glob('./pages/**/*.tsx')
        ),

    setup({ el, App, props }) {
        if (!el) {
            console.error("❌ Elemento #app no encontrado en el DOM");
            return;
        }

        const root = createRoot(el);
        root.render(<App {...props} />);
    },

    progress: {
        color: '#6366f1',
        showSpinner: true,
    },
});