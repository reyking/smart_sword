#include "data.h"
#include <stdio.h>
#include <cstdio>
#include <stdlib.h>
#include <string.h>

using namespace sword;
std::queue<data> sword::dataPool;
char *sword::buffer = (char *)calloc(sizeof(sword::data), POOL_DATA_LENGHT + 1); // ultimos bits sos siempre ceros

void sword::clean()
{
    delete sword::buffer;
    sword::dataPool.~queue();
}
data::data(int i) : i(i)
{
}

data::data(){};

data::~data()
{
}

const char *data::readable_out()
{
    char *salida = (char *)calloc(1, 20);
    sprintf(salida, "valor: %d\n", this->i);
    // printf("valor: %d\n",this->i);
    printf(salida);
    return salida;
}

char *sword::serializePool(bool clear)
{
    int num = 0;
    data actual;
    while (0 != sword::dataPool.size() && num <= POOL_DATA_LENGHT)
    {
        actual = sword::dataPool.front();
        memccpy(sword::buffer + (num * sizeof(sword::data)), &actual, 1, sizeof(sword::data));
        sword::dataPool.pop();
        num++;
    }
    return sword::buffer;
}
