import { BadRequestException, Injectable } from "@nestjs/common";
import { IExpenseEntity } from "src/domain/entities/IExpense";
import { ExpensesRepository } from "src/repositories/expenses.repository";

@Injectable()
export class CreateExpenseUseCase {
    constructor(
        private readonly createExpensesRepository: ExpensesRepository,
    ) { }

    async execute(expense: Input): Promise<void> {
        if (expense.amount <= 0) {
            throw new BadRequestException('O valor da despesa deve ser maior que zero');  
        }

        if (expense.categoryName === '') {
            throw new BadRequestException('O nome da categoria não pode ser vazio');
        }

        if (expense.establishmentName === '') {
            throw new BadRequestException('O nome do estabelecimento não pode ser vazio');
        }

        await this.createExpensesRepository.create({ ...expense, createDt: new Date() } as IExpenseEntity);
    }
}

export type Input = {
    categoryName: string;
    establishmentName: string;
    amount: number;
}
