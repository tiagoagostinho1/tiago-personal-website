import { TextInput, Textarea, SimpleGrid, Group, Title, Button, Card } from '@mantine/core';
import { useForm } from '@mantine/form';

export function GetInTouchSimple() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <form onSubmit={form.onSubmit(() => {})}>
        <Card
        shadow="sm"
        padding="xl"
        >
            <Title
                order={2}
                size="h1"
                style={{ fontFamily: 'Greycliff CF, var(--mantine-font-family)' }}
                fw={800}
                ta="center"
            >
                Get in touch
            </Title>
            <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
                <TextInput
                label="Name"
                placeholder="Your name"
                name="name"
                variant="filled"
                {...form.getInputProps('name')}
                />
                <TextInput
                label="Email"
                placeholder="Your email"
                name="email"
                variant="filled"
                {...form.getInputProps('email')}
                />
            </SimpleGrid>

        <Textarea
            mt="md"
            label="Message"
            placeholder="Your message"
            maxRows={10}
            minRows={5}
            autosize
            name="message"
            variant="filled"
            {...form.getInputProps('message')}
        />

        <Group justify="center" mt="xl">
            <Button type="submit" size="md">
            Send message
            </Button>
        </Group>
      </Card>

      
    </form>
  );
}