class Api::BooksController < ApplicationController

  def index    
    @books = Book.all
    render :json => @books
  end
  
  def create
    @book = Book.new(self.book_params)
    if @book.save
      render :json => @book
    else
      render :json => @book.errors, :status => :unprocessable_entity
    end
  end

  def destroy
    @book = Book.find(params[:id])
    @book.destroy!
    render :json => @book
  end

  def show
    @book = Book.find(params[:id])
    render :json => @book
  end

  def update
    @book = Book.find(params[:id])
    if @book.update_attributes(self.book_params)
      render :json => @book
    else
      render :json => @book.errors, :status => :unprocessable_entity
    end
  end

  protected
  def book_params
    self.params[:book].permit(:title, :author, :description)
  end
end
