import {
  Controller,
  Get,
  Post,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { Product } from './product.entity';
import { ProductsService } from './products.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('api')
export class ProductsController {
  constructor(private productsService: ProductsService) { }

  @Get('fetchData')
  async fetchData(): Promise<Product[] | any> {
    try {
      const data = await this.productsService.getProducts();
      if (data) {
        data.forEach(async (element) => {
          const sproduct: any = {
            product_id: element.id,
            title: element.title,
            price: element.price,
            description: element.description,
          }
          await this.productsService.create(sproduct);
        });
      }
      return ({
        mgs_id: 1,
        msg: 'sucessfully fetch data from api and insert into database',
        data: data
      }
      )

    } catch (error) {
      return ({
        mgs_id: -1,
        msg: 'error on fetching data from api'
      }
      )
    }
  }


  @Get('getAllData')
  async GetAll(): Promise<Product[] | any> {
    try {
      const data = await this.productsService.getAll();
      return ({
        mgs_id: 1,
        msg: 'sucessfully get all data from database',
        data: data
      }
      )
    } catch (error) {
      return ({
        mgs_id: -1,
        msg: 'error on getting data from database'
      }
      )
    }
  }

  @Get('getData/:id')
  async GetOne(@Param('id', ParseIntPipe) id: number): Promise<Product> {
    return this.productsService.getOneById(id);
  }


}
