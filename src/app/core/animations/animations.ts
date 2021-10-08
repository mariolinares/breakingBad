import { animate, query, stagger, style, transition, trigger } from "@angular/animations";

export const listAnimation = trigger('listAnimation', [
    transition('* <=> *', [
        query(':enter',
            [style({ opacity: 0 }), stagger('40ms', animate('200ms ease-out', style({ opacity: 1 })))],
            { optional: true }
        ),
        query(':leave',
            animate('200ms', style({ opacity: 0 })),
            { optional: true }
        )
    ])
]);


export const fadeAnimation = trigger('fade', [
    transition('void => *', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 }))
    ])
])