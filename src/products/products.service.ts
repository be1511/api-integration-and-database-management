import { HttpException, HttpService, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/index';
import { Product } from './product.entity';
import axios from 'axios';

@Injectable()
export class ProductsService {
  httpService: any;
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>, private http: HttpService
  ) { }

  async getAll(): Promise<Product[]> {
    return await this.productRepository.find();
  }

  async getProducts(): Promise<any> {
    try {
      const response = await axios.get('https://api.escuelajs.co/api/v1/products');
      const data = response.data.map((element) => {
        return {
          id: element.id,
          title: element.title,
          price: element.price,
          description: element.description,
        }
      })
      return data;
    } catch (error) {
      throw error;
    }
  }

  async getOneById(id: number): Promise<Product> {
    try {
      return await this.productRepository.findOneOrFail({
        where: { product_id: id },
      });
    } catch (err) {
      console.log('Get one product by id error: ', err.message ?? err);
      throw new HttpException(
        `Product with id ${id} not found.`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  async create(product: CreateProductDto): Promise<Product> {
    const createdProduct = this.productRepository.create(product);
    return await this.productRepository.save(createdProduct);
  }
}
