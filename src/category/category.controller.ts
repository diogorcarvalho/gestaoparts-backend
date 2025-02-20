import { Controller, Get } from '@nestjs/common';

@Controller('categorias')
export class CategoryController {

    @Get()
    getAll(): any[] {
        return [
            { id: 1, name: 'Alimentalção' },
            { id: 2, name: 'Educação' },
            { id: 3, name: 'Lazer' },
            { id: 4, name: 'Saúde' },
            { id: 5, name: 'Transporte' },
            { id: 6, name: 'Moradia' },
            { id: 7, name: 'Vestuário' },
            { id: 8, name: 'Outros' },
        ];
    }
}
