#include "data.h"
#include <stdio.h>
#include <cstdio>
#include <stdlib.h>
using namespace sword;
std::queue<data> sword::dataPool;

data::data(int i): i(i)
{
}

data::data(){};

data::~data()
{
}

const char * data::readable_out(){
    char * salida = (char *)calloc(1,20);
    sprintf(salida,"valor: %d\n",this->i);
    // printf("valor: %d\n",this->i);
    printf(salida);
    return salida;
}

char *sword::serializePool()
{
    // while (inicio!=fin-1)
    // {
    //     /* code */
    // }
    return 0;
}
