import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post } from '@nestjs/common';
import { ApiProperty } from '@nestjs/swagger';
import { IExpenseEntity } from 'src/domain/entities/IExpense';
import { ExpensesRepository } from 'src/repositories/expenses.repository';
import { CreateExpenseUseCase } from 'src/use-cases/create-expense.servce';

export class RegistryExpenseRequest {
    @ApiProperty()
    categoryName: string;

    @ApiProperty()
    establishmentName: string;

    @ApiProperty()
    amount: number;
}

@Controller('gastos')
export class ExpensesController {
    constructor(
        private readonly createExpenseUseCase: CreateExpenseUseCase,
        private readonly expensesRepository: ExpensesRepository,
    ) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    async findAll(): Promise<IExpenseEntity[]> {
        return this.expensesRepository.findAll();
    }

    @Post('registrar')
    @HttpCode(HttpStatus.OK)
    async create(@Body() expense: RegistryExpenseRequest): Promise<void> {
        return await this.createExpenseUseCase.execute(expense);
    }

    @Delete('eliminar/:id')
    @HttpCode(HttpStatus.OK)
    async delete(@Param('id') id: string): Promise<void>  {
        return this.expensesRepository.delete(id);
    }
}
